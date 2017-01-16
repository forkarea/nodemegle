import uuid from 'uuid';

export class Message {
    constructor(type, user, content, time){
        this.type = type;
        this.user = user;
        this.content = content;
        this.time = time;
        this.id = uuid.v4();
    }
}