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
					<view @tap="skillOne(item)">{{item.name}}</view> 
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
				objects:[{name:'test'}],
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


</style>
