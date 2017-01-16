<template xmlns:v="http://www.w3.org/1999/xhtml" xmlns:v-if="http://www.w3.org/1999/xhtml">
    <li :class="type">
        <div v-if="type != 'system'">
            <h6>{{user}} - <span>{{time | dateFilter}}</span></h6>
        </div>
        <p>{{content}}</p>
    </li>
</template>
<style scoped lang="css" rel="stylesheet/css">
    li {
        margin: 5px;
        padding: 5px 15px;
        max-width: 70%;
        border-radius: 8px;
        overflow-x: hidden;
    }

    li p {
        margin: 0;
        padding: 0;
        color: #373737;
    }

    li div {
        color: #f6c15d;
        margin: 0;
        padding: 0;
    }

    li.own {
        align-self: flex-end;
        background-color: #fcde7c;
        text-align: right;
    }

    li.own div {
        color: #e9954d;
    }

    li.outer {
        align-self: flex-start;
        background-color: #f9fcd0;
    }

    li.system {
        align-self: center;
        width: 95%;
        text-align: center;
        background-color: #ff6771;
    }

    li.system p {
        color: #EEE;
    }

    @media (max-width: 600px) {
        li {
            max-width: 90%;
            width: 90%;
        }
    }

</style>
<script type="text/babel">
    import dateFilter from '../filters/date-filter';

    export default{
        props: {
            type: {
                type: String,
                required: true
            },
            user: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            time: {
                type: Date,
                required: true
            },

        },
        data(){
            return {}
        },
        components: {},
        name: 'message-item',
    }
</script>
