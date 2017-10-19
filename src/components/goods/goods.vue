<template>
<div class="goods">
	<div class="menu-wrapper" ref="menuWrapper">
		<ul>
			<li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
				<span class="text border-1px">
					<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
				</span>
			</li>
		</ul>
	</div>
	<div class="foods-wrapper" ref="foodsWrapper">
		<ul>
			<li v-for="item in goods" class="food-list food-list-hook">
				<h1 class="title">{{item.name}}</h1>
				<ul>
					<li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
						<div class="icon">
							<img width="57" height="57" :src="food.icon">
						</div>
						<div class="content">
							<h2 class="name">{{food.name}}</h2>
							<p class="desc">{{food.description}}</p>
							<div class="extra">
								<span class="count">月售{{food.sellCount}}份</span>
								<span>好评率{{food.rating}}%</span>
							</div>
							<div class="price">
								<span class="now">￥{{food.price}}</span>
								<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
							</div>
							<div class="cartcontrol-wrapper">
								<cartcontrol :food="food"></cartcontrol>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
	<food :food="selectedFood" ref="food"></food>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import shopcart from '@/components/shopcart/shopcart.vue';
import cartcontrol from '@/components/cartcontrol/cartcontrol.vue';
import food from '@/components/food/food';

import axios from 'axios';

export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			goods: [],
			listHeight: [],
			scrollY: 0,
			selectedFood: {}
		}
	},
	computed: {
		currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i;
                }
            }
            return 0;
        },
        selectFoods() {
        	let foods = [];
        	//商品分类
        	this.goods.forEach((good) => {
        		//分类中的食品
        		good.foods.forEach((food) => {
        			//食品数不为0 添加值 临时数组foods中
        			if(food.count) {
        				foods.push(food);
        			}
        		})
        	});
        	//返回即为选择的食品
        	return foods;
        },
	},
	created () {
	    axios.get('static/data.json').then((res) => {
			this.goods = res.data.goods;
			this.$nextTick(() => {
				this._initScroll();
				this._calculateHeight();
			});
	    });
	    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
	},
	methods: {
		selectMenu(index, event) {
			// better-scroll 可以监听到此事件，浏览器原生不能监听到  防止pc端出现两次点击
            if (!event._constructed) {
                return;
            }
            // 获取食物的li Dom节点列表
            let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
            let el = foodList[index];
            // 调用better-scroll 方法滚动到响应位置
            this.foodScroll.scrollToElement(el, 300);
		},
		selectFood(food, event) {
  			if (!event._constructed) {
                return;
            }
            this.$refs.food.show();
            this.selectedFood = food;
  		},
		// _drop(target) {
  // 			//体验优化,异步执行下落动画
	 //  		this.$nextTick(() => {
	 //  			this.$refs.shopcart.drop(target);
	 //  		});
  // 		},
		_initScroll() {
			this.menuScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			});
			this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
				click: true,
				probeType: 3 // 监测实时滚动的位置
			});

			this.foodScroll.on('scroll', (pos) => {
	            // 拿到实时的y坐标
	            this.scrollY = Math.abs(Math.round(pos.y));
	        })
		},
		_calculateHeight() {
            // 获取食物的li Dom节点列表
            let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        }
	},
	components: {
		shopcart,
		cartcontrol,
		food
	},
    // events: {
    // 	'cart.add'(target) {
    // 		this._drop(target);
    // 	}
    // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/mixins";

.goods {
	display: flex;
	position: absolute;
	top: 174px;
	bottom: 46px;
	width: 100%;
	overflow: hidden;
	.menu-wrapper {
		flex: 0 0 80px;
		width: 80px;
		background-color: #f3f5f7;
		.menu-item {
			display: table;
			padding: 0 12px;
			height: 54px;
			width: 56px;
			line-height: 14px;
			&.current {
				position: relative;
				z-index: 10;
				margin-top: -1px;
				background-color: #fff;
				font-weight: 700;
				.text {
					@include border-none();
				}
			}
			.icon {
                display: inline-block;
                vertical-align: top;
                width: 12px;
                height: 12px;
                margin-right: 2px;
                background-size: 12px 12px;
                background-repeat: no-repeat;
                &.decrease {
                    @include bg-image('decrease_3');
                }
                &.discount {
                    @include bg-image('discount_3');
                }
                &.guarantee {
                    @include bg-image('guarantee_3');
                }
                &.invoice {
                    @include bg-image('invoice_3');
                }
                &.special {
                    @include bg-image('special_3');
                }
            }
            .text {
            	display: table-cell;
            	width: 56px;
            	vertical-align: middle;
            	@include border-1px(rgba(7,17,27,0.1));
            	font-size: 12px;
            }
		}
	}
	.foods-wrapper {
		flex: 1;
		.title {
			padding-left: 14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size: 12px;
			color: rgb(147, 153, 159);
			background-color: #f3f5f7;
		}
		.food-item {
			display: flex;
			margin:18px;
			padding-bottom: 18px;
			@include border-1px(rgba(7,17,27,0.1));
			&:last-child {
				@include border-none();
				margin-bottom: 0;
			}
			.icon {
				flex: 0 0 57px;
				margin-right: 10px;
			}
			.content {
				flex: 1;
				.name {
					margin: 2px 0 8px 0;
					height: 14px;
					line-height: 14px;
					font-size: 14px;
					color: rgb(7,17,27) 
				}
				.desc, .extra {
					line-height: 10px;
					font-size: 10px;
					color: rgb(147,153,159)
				}
				.desc {
					line-height: 12px;
					margin-bottom: 8px;
				}
				.extra {
					.count {
						margin-right: 12px;
					}
				}
				.price {
					font-weight: 700;
					line-height: 24px;
					.now {
						margin-right: 8px;
						font-size: 14px;
						color: rgb(240,20,20);
					}
					.old {
						text-decoration: line-through;
						font-size: 10px;
						color: rgb(147,153,159);
					}
				}
				.cartcontrol-wrapper {
					position: absolute;
					right: 0;
					bottom: 12px;
				}
			}
		}
	}
}
</style>
