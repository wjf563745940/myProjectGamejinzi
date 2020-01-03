<template>
	<view class="content">
		<view class='battle_object'>
			<view v-for="(item,index) in objects" :key="index">
				{{item.name}}
			</view>
		</view>
		<view class="progress">
			<view class="">
				jindu
			</view>
		</view>
		<view class='skill-con'>
			<view class="skill-one">
				<view class="" @tap="collect">
					collect
				</view>
			</view>
			<view class="skill-one">
				<view v-for="(item,index) in objects" :key="index" >
					<view  v-show='collectNum===0' class='skill-one-item ' >at {{item.name}}</view> 
					<view v-show='collectNum>0' class='skill-one-item skillOneItemActive'  @tap="skillOne(item)">at {{item.name}}</view> 
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				objects:[{name:'对象1'}],
				collectNum:0,
				canCollect:true
			}
		},
		onLoad() {

		},
		methods: {
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
	
	.skill-one-item{
		background: #999999;
		color: #fff;
		padding: 6px;
		font-size: 12px;
	}
	.skillOneItemActive{
		background: #f73939;
	}
</style>
