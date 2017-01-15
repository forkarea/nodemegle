<template xmlns:v="http://www.w3.org/1999/xhtml" xmlns:v-if="http://www.w3.org/1999/xhtml">
    <ul class="message-list">
        <li :class="msg.type" v-for="msg in messages">
            <div v-if="msg.type != 'system'">
                <h7>{{msg.user}} - <span>{{msg.time | dateFilter}}</span></h7>
            </div>
            <p>{{msg.content}}</p>
        </li>
    </ul>
</template>
<style scoped lang="css" rel="stylesheet/css">
    .message-list {
        display: flex;
        width: 100%;
        flex: 6 1 auto;
        flex-direction: column-reverse;
        overflow-y: auto;
        min-height: 0px;
    }

    li {
        margin: 5px;
        padding: 5px;
        max-width: 70%;
        border-radius: 8px;
    }

    li p {
        margin: 0;
        padding: 0;
        color: #FFF;
    }

    li div {
        color: #f6e571;
        margin: 0;
        padding: 0;
    }

    li.own {
        align-self: flex-end;
        background-color: #1de9b6;
        text-align: right;
    }

    li.own div {
        color: #E94E1D;
    }

    li.outer {
        align-self: flex-start;
        background-color: #9d5ae9;
    }

    li.system {
        align-self: center;
        width: 95%;
        text-align: center;
        background-color: #ff6771;
    }

</style>
<script type="text/babel">
    import dateFilter from '../filters/date-filter';

    export default{
        props: {},
        data(){
            return {
                messages: [{
                    type: 'system',
                    user: 'system',
                    content: 'uzytkownik opuscil rozmowe',
                    time: new Date
                }, {
                    type: 'own',
                    user: 'qh4r',
                    content: 'cześć',
                    time: new Date
                }, {
                    type: 'outer',
                    user: 'yoshiko_o',
                    content: 'no siemka, jak się masz dawno sie nie widzelismy',
                    time: new Date
                }, {
                    type: 'own',
                    user: 'qh4r',
                    content: 'no nie da sie ukryc kope lat u mnie swietnie a co u ciebie',
                    time: new Date
                },

                ]
            }
        },
        components: {}
    }
</script>
