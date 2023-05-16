<template>
    <div class="container text-center">
        <AlertDanger :message="message"/>
        <div @keydown.enter="login" class="row justify-content-center">
            <div class="col col-3 mt-5">
                <div class="mb-3">
                    <label for="username" class="form-label">Kasutajanimi</label>
                    <input v-model="username" type="text" class="form-control" id="username">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Parool</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div >
                <div class="mb-3">
                    <label for="password" class="form-label">Parool uuesti</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div >
                <div class="mb-3">
                    <label for="email" class="form-label">E-posti aadress</label>
                    <input v-model="email" type="email" class="form-control" id="password">
                </div >

                <button @click="login" type="submit" class="btn btn-primary">Registreeri</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterView"
}
</script>

<style scoped>

</style>