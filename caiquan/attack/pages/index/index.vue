<template>
	<view class="content">
		<view class='battle_object'>
			<view v-for="(item,index) in objects" :key="index">
				{{item.name}}
			</view>
		</view>
		
		<view class="play-count">
			回合数:{{playCount}}
		</view>
		<view class="progress">
			<view class="progress-pro">
				<view class="progress-key">
					
				</view>
				<view class="progress-pro-key " :class="{progressProKeyAni:gameState===1}" :style="{animationDuration:keyTime+'s',animationPlayState:aniPlayState}">
					
				</view>
			</view>
		</view>
		<view class='skill-con'>
			<view class="skill-one">
				<view class="" @tap="collect" :class="{canCollect:canCollect}">
					collect
				</view>
			</view>
			<view class="skill-defend">
				<view v-for='(item,index) in defends' @tap="defendAttack(item)">{{item.name}}</view>
			</view>
			<view class="skill-one">
			skill-one:	{{collectNum}}
				<view v-for="(item,index) in objects" :key="index" >
					<view  v-show='collectNum===0' class='skill-one-item ' >at {{item.name}}</view> 
					<view v-show='collectNum>0' class='skill-one-item skillOneItemActive'  @tap="skillOne(item)">at {{item.name}}</view> 
				</view>
			</view>
		</view>
		<view @click="startGame" class="start-Game" v-if='gameState!==1'>start</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				playCount:0,
				title: 'Hello',
				objects:[{name:'对象1'}],
				defends:[{name:'f1'},{name:'f2'},{name:'f3'}],
				collectNum:0,
				canCollect:true,
				gameState:0,//0  1开始 2
				keyTime:2,
				aniPlayState:'running',   //paused|running;
				score:'',//积分 拿到中间值加分。
			}
		},
		onLoad() {

		},
		methods: {
			defendAttack(defend){
				console.log('defend',defend.name)
			},
			collect(){
				if(this.canCollect){
					this.collectNum+=1;
					this.canCollect=false;
				}
			},
			skillOne(item){
				console.log(`a ${item.name}`)
				this.collectNum-=1;
			},
			startGame(){
				this.gameState=1;
				this.startCount();
			},
			startCount(){
				setTimeout(()=>{
					this.playCount+=1;
					this.startCount();
					this.canCollect=true;
				},this.keyTime*1000)
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.canCollect{
		color:#4CD964;
	}
	.skill-one-item{
		background: #999999;
		color: #fff;
		padding: 6px;
		font-size: 12px;
	}
	.skillOneItemActive{
		background: #f73939;
	}
	
	.skill-defend{
		display: flex;
		justify-content: space-between;
	}
	.progress-pro{
		width: 400rpx;
		height: 40rpx;
		border:1px solid #007AFF;
		position: relative;
	}
	.progress-key{
		width: 40rpx;
		height: 40rpx;
		position:absolute;
		top: 0;
		left: 180rpx;
		background: linear-gradient(-90deg,#fff,yellow,red, yellow, #fff);
	}
	.progress-pro-key{
		width: 10rpx;
		height: 40rpx;
		position:absolute;
		top: 0;
		left: -10rpx;
		background: #eee;
		  /* transition: all 1s ease; */
		  
	}
	.progressProKeyAni{
		animation:myfirst 2s infinite;   
		animation-timing-function: linear;
	}
	    @keyframes myfirst{
	        0%   {left:-10rpx;}
	        100% {left:390rpx; }
	    }
	/* .progress-pro:hover .progress-pro-key{
	transform:translate(200px, 0);	
	} */
	.start-Game{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		z-index: 11;
		background: rgba(0,0,0,.6);
		color: #fff;
		justify-content: center;
	}
</style>
