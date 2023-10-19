<script lang="ts" setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const form = reactive({
        username:'',
        password:''
    })
    const register = () =>{
        router.push('/reg')
    }
    const forget = () => {
        router.push('/forget')
    }
    //登录验证
    const onSubmit = () => {
        
    }
</script>
<template>
    <div style="margin-top: 100px;"></div>
    <van-row gutter="20">
  <van-col span="10"></van-col>
  <van-col span="8"><strong style="font-size: 15pt;">登录</strong></van-col>
  <van-col span="10"></van-col>
    </van-row>
    <div class="body">
        
    </div>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="form.username"
      name="用户名"
      label="用户名:"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="form.password"
      type="password"
      name="密码"
      label="密码:"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <a @click="register" style="float: left; margin:0 0 10px 10px;">立即注册</a>
    <a @click="forget" style="float: right; margin: 0 20px 10px 0;">忘记密码</a>
  </div>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>

</template>

<style lang="scss" scoped>
    .body{
        margin-top: 20px;
    }
</style>