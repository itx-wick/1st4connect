import React from 'react';
import {
  View,
  Pressable,
  FlatList,
  RefreshControl,
  Image,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';
import {postApiCall} from '../services/ApiServices';
import {FONTS, IMAGES} from '../constants';

import AppText from './AppText';
import {Styles} from '../styles';

const VoucherList = props => {
  const openPaymentURL = async url => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const ListItem = ({voucher, index, instance}) => (
    <Pressable
      style={[
        Styles.test_list_item_card,
        {
          marginTop: index === 0 ? RFValue(5) : RFValue(5),
        },
      ]}
      onPress={() => {}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: Dimensions.get('screen').height * 0.04,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <AppText
              style={{
                fontSize: RFValue(14),
                fontFamily: FONTS.regular,
                fontWeight: 'bold',
              }}>
              Voucher ID:{' '}
            </AppText>
            <AppText style={{fontSize: RFValue(14), fontFamily: FONTS.regular}}>
              {voucher.InvID}
            </AppText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 0,
              top: 0,
            }}>
            <Pressable onPress={() => openPaymentURL(voucher.PaymentURL)}>
              <Image
                source={IMAGES.paymentLink}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                  marginHorizontal: RFValue(5),
                }}
              />
            </Pressable>
            <Pressable onPress={() => props.fetchInvoice(voucher)}>
              <Image
                source={IMAGES.receipt}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                  marginHorizontal: RFValue(5),
                }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '50%'}}>
            <View style={{flexDirection: 'row'}}>
              <AppText
                style={{
                  fontSize: RFValue(14),
                  fontFamily: FONTS.regular,
                  fontWeight: 'bold',
                }}>
                Amount:{' '}
              </AppText>
              <AppText
                style={{fontSize: RFValue(14), fontFamily: FONTS.regular}}>
                {voucher.InvTotal}
              </AppText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <AppText
                style={{
                  fontSize: RFValue(14),
                  fontFamily: FONTS.regular,
                  fontWeight: 'bold',
                }}>
                Balance:{' '}
              </AppText>
              <AppText
                style={{fontSize: RFValue(14), fontFamily: FONTS.regular}}>
                {voucher.InvBalance}
              </AppText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'flex-end',
            }}>
            <AppText
              style={{
                fontSize: RFValue(14),
                fontFamily: FONTS.regular,
              }}>
              {voucher.InvDate}
            </AppText>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderItem = ({item, index}) => (
    <ListItem voucher={item} index={index} instance={props.instance} />
  );

  return (
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.InvID}
      refreshControl={
        <RefreshControl
          //refresh control used for the Pull to Refresh
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
    />
  );
};

export default VoucherList;
