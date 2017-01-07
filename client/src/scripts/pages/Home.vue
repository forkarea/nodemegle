<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <main-layout>
        <!--<h1>Home</h1>-->
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="input-field col s9">
                    <input @focus="clearErrors" :class="{invalid: errors}" class="validate" type="text" id="user-name" @input="updateName"/>
                    <label :data-error="errors" for="user-name">Wprowadź imię którego chcesz żywać</label>
                </div>
                <div class="col s3">
                    <button class="btn btn-large" type="submit" href='/wait'>Potwierdź</button>
                </div>
            </div>
        </form>
    </main-layout>
</template>
<style src="./Home/home.css"></style>
<script src="./Home/home.js"></script>
