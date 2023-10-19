<script lang="ts" setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const form = reactive({
        username:'',
        password:'',
        verify:''
    })
    //注册
    const onSubmit = () => {

    } 
</script>
<template>
     <div style="margin-top: 100px;"></div>
    <van-row gutter="20">
  <van-col span="10"></van-col>
  <van-col span="8"><strong style="font-size: 15pt;">注册</strong></van-col>
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
    <van-field
      v-model="form.verify"
      label="重复密码"
      name="asyncValidator"
      placeholder="请再次输入密码"
      :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
  </div>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      注册
    </van-button>
  </div>
</van-form>
</template>
<style>
 .body{
        margin-top: 20px;
    }
</style>