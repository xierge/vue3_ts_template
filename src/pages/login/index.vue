<template>
    <div class="login-wrap">
        <div class="login">
            <h3>welcome my demo</h3>
            <el-form :modle="form" label-width="80px" class="login-form">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="toLogin">login</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { login } from '@/api';
import { useUserStore } from '@/store/user';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const userStore = useUserStore()

const router = useRouter()
interface ILoginForm {
    username: string,
    password: string
}
let form = reactive<ILoginForm>({
    username: "",
    password: ""
})
async function toLogin() {
    const res = await login(form)
    localStorage.setItem("token", res.token)
    userStore.saveUserInfo(res)
    router.push("/")
}

</script>

<style lang="less">
.login-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 40px 70px;
        border: 1px solid #ccc;
        background-color: #fff;

        .el-button {
            width: 100%;
        }

        .login-form {}
    }

}
</style>