<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <main-layout>
        <!--<p :class="{connected: partner.connected, disconnected: !partner.connected}">{{ partner.name }}</p>-->
        <div class="chat-content">
            <div class="row">
                <v-link class="btn btn-next right" href='/wait'>Nastepny rozmówca</v-link>
            </div>
            <messages-list></messages-list>
            <form @submit.prevent="sendMessage">
                <input v-model:value="message" placeholder="Type your message here...">
            </form>
        </div>
    </main-layout>
</template>
<style src="./Chat/chat.css"></style>
<script src="./Chat/chat.js"></script>
