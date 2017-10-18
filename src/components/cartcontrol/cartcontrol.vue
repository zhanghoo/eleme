<template>
<div class="cartcontrol">
	<transition name="fadeRotate">
		<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
			<span class="icon-remove_circle_outline inner"></span>
		</div>
	</transition>
	<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
	<div class="cart-add" @click.stop.prevent="addCart($event)">
		<i class="icon-add_circle"></i>
	</div>
</div>
</template>

<script>
import Vue from 'vue';

export default {
	props: {
		food: {
			type: Object
		}
	},
	methods: {
		addCart(event) {
			if (!event._constructed) {
		    	return
		    }
			if (!this.food.count) {
				//为对象添加不存在的属性时, 用 Vue.set() 以此通知DOM
		        Vue.set(this.food, 'count', 1)
		    } else {
		    	this.food.count++;
		    }
		    //触发购物车添加事件
		    this.$root.eventHub.$emit('cart.add', event.target);
		},
		decreaseCart(event) {
			if (!event._constructed || !this.food.count) {
		    	return
		    }
		    this.food.count--;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.cartcontrol {
	font-size: 0;
	.cart-decrease {
		display: inline-block;
		padding: 6px;
		transition: all .4s linear;
		.inner {
			line-height: 24px;
			font-size: 24px;
			color: rgb(0,160,220);
		}
		&.fadeRotate-enter-active, &.fadeRotate-leave-active {
            transform: translate3d(0, 0, 0);
            .inner{
            	display: inline-block;
                transform: rotate(0deg);
            }
        }
        &.fadeRotate-enter, &.fadeRotate-leave-active {
            opacity: 0;
            transform: translate3d(24px, 0, 0);
            .inner{
                transform: rotate(180deg);
            }
        }
	}
	.cart-count {
		display: inline-block;
		vertical-align: top;
		width: 12px;
		padding-top: 6px;
		line-height: 24px;
		text-align: center;
		font-size: 10px;
		color: rgb(147,153,59);
	}
	.cart-add {
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 24px;
		color: rgb(0,160,220);
	}
}
</style>
