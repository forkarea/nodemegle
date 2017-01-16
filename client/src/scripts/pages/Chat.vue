<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <main-layout>
        <!--<p :class="{connected: partner.connected, disconnected: !partner.connected}">{{ partner.name }}</p>-->
        <div class="chat-content" key="chat-screen">
            <div class="row">
                <h5 class="col s12 m6 l8"> asd{{partner.name}}</h5>
                <v-link class="btn btn-next col s12 m6 l4" href='/wait'>Nastepny rozmówca</v-link>
            </div>
            <messages-list :messages="messagesList"></messages-list>
            <form @submit.prevent="sendMessage">
                <input :disabled="!partner.connected" v-model:value="message" placeholder="Wpisz wiadomość...">
            </form>
        </div>
    </main-layout>
</template>
<style src="./Chat/chat.css"></style>
<script src="./Chat/chat.js"></script>
