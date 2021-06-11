import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity: '12'},
        {roomName:'A-02', roomCapacity: '16'},
        {roomName:'A-03', roomCapacity: '22'},
        {roomName:'A-04', roomCapacity: '147'},
        {roomName:'CN-01', roomCapacity: '141'},
        {roomName:'CN-02', roomCapacity: '126'},
        {roomName:'CN-03', roomCapacity: '152'},
        {roomName:'B-01', roomCapacity: '614'},
        {roomName:'B-03', roomCapacity: '713'},
        {roomName:'B-05', roomCapacity: '619'},
        {roomName:'B-09', roomCapacity: '617'},
        {roomName:'B-11', roomCapacity: '512'}
    ];
}