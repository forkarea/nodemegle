<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <main-layout>
        <h1>Chat</h1>
        <p :class="{connected: partner.connected, disconnected: !partner.connected}">{{ partner.name }}</p>
        <form @submit.prevent="sendMessage">
            <input v-model:value="message" placeholder="Type your message here...">
        </form>
        <v-link href='/wait'>Znajdz</v-link>
    </main-layout>
</template>
<style src="./Chat/chat.css"></style>
<script src="./Chat/chat.js"></script>
