import React,{ Component} from 'react';
import {
    View,
    AppRegistry}
    from 'react-native';
export default class WidthAndHeight extends Component{
  /*  // 固定宽和高
    render(){
        return(
            <View>
                <View style={{width:50,height:50,backgroundColor:'#122344'}}/>
                <View style={{width:100,height:100,backgroundColor:'#732346'}}/>
                <View style={{width:150,height:150,backgroundColor:'#323209'}}/>
            </View>
        );
    }*/

    /**
     * 弹性宽和高:弹性宽和高会根据屏幕的大小来自动的适应
     * 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
     * 如果父容器既没有固定的width和height，也没有设定flex，
     * 则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的
     * @returns {XML}
     * 这和Android布局里面权重（weight）一样,子控件的flex值越大，占的比例也就越大
     */
    render(){
        return(
           /* //当子控件的flex都是1的时候是平均分；
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'#122344'}}/>
                <View style={{flex:1,backgroundColor:'#732346'}}/>
                <View style={{flex:1,backgroundColor:'#323209'}}/>
            </View>*/

           //父控件设置宽和高
            <View style={{width:200,height:300}}>
                <View style={{flex:1,backgroundColor:'#122344'}}/>
                <View style={{flex:2,backgroundColor:'#732346'}}/>
                <View style={{flex:3,backgroundColor:'#323209'}}/>
            </View>
        );
    }
};