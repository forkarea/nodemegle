<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <main-layout>
        <!--<h1>Home</h1>-->
        <form @submit.prevent="submitForm" key="home-screen">
            <div class="row">
                <div class="input-field col s12 m9">
                    <input @focus="clearErrors" :value="name" :class="{invalid: errors}" class="validate" type="text" id="user-name" @input="updateName"/>
                    <label :data-error="errors" :class="{active: name}" for="user-name">Wprowadź imię którego chcesz używać</label>
                </div>
                <div class="col m3 s12">
                    <button class="btn btn-large" type="submit">Potwierdź</button>
                </div>
            </div>
        </form>
    </main-layout>
</template>
<style src="./Home/home.css"></style>
<script src="./Home/home.js"></script>
