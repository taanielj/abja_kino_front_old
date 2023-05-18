<template>
    <nav>
        <router-link to="/">Kava</router-link>
        |
        <router-link to="/about">Filmid</router-link>
        |
        <router-link to="/login">Logi Sisse</router-link>
        |
        <template>
            <router-link to="/tickets">Piletid</router-link>
            |
            <template v-if="rolename ==='admin'">
                <router-link to="/admin">Admin</router-link>
                |
            </template>

            <router-link to="#" @click="handleLogout">Logi välja</router-link>
        </template>

    </nav>
    <router-view @event-update-nav-menu="updateNavMenu"/>

  <!--  asdf-->
</template>
<script>
export default {
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            rolename: sessionStorage.getItem('rolename')
        }
    },
    methods: {
        updateNavMenu() {
            this.userId = sessionStorage.getItem('userId')
            this.rolename = sessionStorage.getItem('rolename')
        },

        handleLogout() {

        },
    }
</script>


<style>
#app {
    font-family: 'Cinzel', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
