import React, { Component } from "react";
import { StyleSheet, ScrollView, Dimensions, Text, View } from "react-native";
import { styles } from "./styles";

const GAUGE_WIDTH = Math.floor(Dimensions.get("window").width);
const INTERVAL_WIDTH = 18;

const scale = (v, inputMin, inputMax, outputMin, outputMax) => {
  return Math.round(
    ((v - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
      outputMin
  );
};

export default class LineGauge extends Component {
  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
    this._handleScrollEnd = this._handleScrollEnd.bind(this);
    this._handleContentSizeChange = this._handleContentSizeChange.bind(this);

    this.scrollMin = 0;
    this.scrollMax = this._getScrollMax(props);
    this._scrollQueue = null;
    this._value = props.value || props.min;

    this.state = {
      contentOffset: this._scaleValue(this._value),
    };
  }

  _contentSizeWillChange(nextProps) {
    let { min, max } = nextProps;
    if (min !== this.props.min || max !== this.props.max) {
      return true;
    }

    return false;
  }

  _getScrollMax(props = this.props) {
    return (props.max - props.min) * INTERVAL_WIDTH;
  }

  _scaleScroll(x, props = this.props) {
    let { min, max } = props;
    return scale(x, this.scrollMin, this.scrollMax, min, max);
  }

  _scaleValue(v, props = this.props) {
    let { min, max } = props;
    return scale(v, min, max, this.scrollMin, this.scrollMax);
  }

  _setScrollQueue(scrollTo) {
    this._scrollQueue = scrollTo;
  }

  _resolveScrollQueue() {
    if (this._scrollQueue !== null) {
      this._scrollView && this._scrollView.scrollTo(this._scrollQueue);
      this._handleScrollEnd();
    }
  }

  _handleContentSizeChange() {
    this._resolveScrollQueue();
  }

  _handleScroll(event) {
    if (this._scrollQueue) return;

    let offset = event.nativeEvent.contentOffset.x;
    let { min, max } = this.props;

    let val = this._scaleScroll(offset);

    if (val !== this._value) {
      this._value = val;
      this.props.onChange(val);
    }
  }

  _handleScrollEnd() {
    this._value = this.props.value;
    this._scrollQueue = null;
  }

  _getIntervalSize(val) {
    let { largeInterval, mediumInterval } = this.props;

    if (val % largeInterval == 0) return "large";
    if (val % mediumInterval == 0) return "medium";
    return "small";
  }

  _renderIntervals() {
    let { min, max } = this.props;
    let range = max - min + 1;

    let values = times(range, (i) => i + min);

    return values.map((val, i) => {
      let intervalSize = this._getIntervalSize(val);

      return (
        <View key={`val-${i}`} style={styles.intervalContainer}>
          {intervalSize === "large" && (
            <Text
              style={[styles.intervalValue, this.props.styles.intervalValue]}>
              {val}
            </Text>
          )}

          <View
            style={[
              styles.interval,
              styles[intervalSize],
              this.props.styles.interval,
              this.props.styles[intervalSize],
            ]}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.styles.container]}>
        <ScrollView
          ref={(r) => (this._scrollView = r)}
          automaticallyAdjustInsets={false}
          horizontal
          decelerationRate={0}
          snapToInterval={INTERVAL_WIDTH}
          snapToAlignment='start'
          showsHorizontalScrollIndicator={false}
          onScroll={this._handleScroll}
          onMomentumScrollEnd={this._handleScrollEnd}
          onContentSizeChange={this._handleContentSizeChange}
          scrollEventThrottle={100}
          contentOffset={{ x: this.state.contentOffset }}>
          <View style={[styles.intervals, this.props.styles.intervals]}>
            {this._renderIntervals()}
          </View>
        </ScrollView>

        <View style={[styles.centerline, this.props.styles.centerline]} />
      </View>
    );
  }
}
