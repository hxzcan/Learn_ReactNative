import React,{Component} from 'react';
import {AppRegistry,View} from 'react-native';

/**
 * flexbox主要用到的有三种样式属性：flexDirection,alignItems,justifyContent
 */
export  default class FlexboxDemo extends Component{
    /**
     * 在组件的style中指定flexDirection可以决定布局的主轴。
     * 子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排
     * flexDirection默认的是column(列)而不是row（行）,flex只能指定一个数值
     * row按照本来的顺序显示，而row-reverse是反方向，并且组件的方向也是相反的顺序显示
     * column也是一样，column-reverse
     */
    render(){
        return(
            <View style={{flex:1,flexDirection:'column-reverse'}}>
                <View style={{width:50,height:50,backgroundColor:'#122344'}}/>
                <View style={{width:50,height:50,backgroundColor:'#732346'}}/>
                <View style={{width:50,height:50,backgroundColor:'#323209'}}/>
            </View>
        );
    }


    /**
     * justifyConten可以决定其子元素沿着主轴的排列方式
     * 对应的这些可选项有：flex-start(从起点上往下或者从左往右紧挨着排列)、center（显示在中间）、
     * flex-end（从末尾下往上或者从右往左紧挨着排列）
     * 、space-around(在某个方向上完全平均分布（头和尾没有）)以及space-between(从头到尾平均分布，头和尾都有)。
     * 这个例子在竖直方向上 flexDirection:column
     */
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'space-between'
            }}>
                <View style={{width:50,height:50,backgroundColor:'#122344'}}/>
                <View style={{width:50,height:50,backgroundColor:'#732346'}}/>
                <View style={{width:50,height:50,backgroundColor:'#323209'}}/>
            </View>
        );
    }

    /**
     * alignItems
     * 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
     * 属性有：flex-start;flex-end;center;stretch(拉伸)
     * 要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
     * 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
     * 在是column往水平方向拉伸，在是row方向时往竖直方向拉伸
     * @returns {XML}
     */
    render(){
        return(
            <View
                style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'flex-end'
                }}
            >
                <View style={{width:50,height:50,backgroundColor:'#122344'}}/>
                <View style={{width:50,height:50,backgroundColor:'#732346'}}/>
                <View style={{width:50,height:50,backgroundColor:'#323209'}}/>
            </View>
        );
    }
};