<template>
<div class="star" :class="starType">
	<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
</div>
</template>

<script>
//定义常量, 只需要修改这里, 就可以统一修改其他用到常量的地方
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
    
export default {
	props: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starType() {
			return 'star-' + this.size;
		},
		itemClasses() {
			let result = [];
			//计算分数, 取整或者是 .5 的数
            let score = Math.floor(this.score * 2) / 2;
            //是否有半星
            let hasDecimal = score % 1 !== 0;
            //有多少个全星
            let integer = Math.floor(score);
            //开始放多少个全星
            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON);
            }
            //放半星
            if (hasDecimal) {
                result.push(CLS_HALF);
            }
            //根据放入的星星, 补齐多少个灰度星
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            //返回
            return result;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../common/scss/mixins";

    .star {
        font-size: 0;
        .star-item {
            display: inline-block;
            background-repeat: no-repeat;
        }
        &.star-48 {
            .star-item {
                width: 20px;
                height: 20px;
                margin-right: 22px;
                background-size: 20px 20px;
                &:last-child {
                    margin-right: 0;
                }
                &.on {
                    @include bg-image('star48_on');
                }
                &.half {
                    @include bg-image('star48_half');
                }
                &.off {
                    @include bg-image('star48_off');
                }
            }
        }
        &.star-36 {
            .star-item {
                width: 15px;
                height: 15px;
                margin-right: 6px;
                background-size: 15px 15px;
                &:last-child {
                    margin-right: 0;
                }
                &.on {
                    @include bg-image('star36_on');
                }
                &.half {
                    @include bg-image('star36_half');
                }
                &.off {
                    @include bg-image('star36_off');
                }
            }
        }
        &.star-24 {
            .star-item {
                width: 10px;
                height: 10px;
                margin-right: 3px;
                background-size: 10px 10px;
                &:last-child {
                    margin-right: 0;
                }
                &.on {
                    @include bg-image('star24_on');
                }
                &.half {
                    @include bg-image('star24_half');
                }
                &.off {
                    @include bg-image('star24_off');
                }
            }
        }
    }
</style>
