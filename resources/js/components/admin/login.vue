<template>
    <div class="container form-group">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label> Username or Email</label>
                <input type="text" id="usernameOrEmail" v-model="usernameOrEmail" class="form-control">
            </div>

            <div class="form-group">
                <label> Password</label>
                <input type="password" id="password" v-model="password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Login </button>
        </form>

    </div>

</template>

<script>
export default {
    name:'loginbase',
    mounted() {
        console.log('Component Mountaed')
    }
}
</script>
