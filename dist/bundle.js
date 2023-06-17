import dayjs from 'dayjs';

function sum(n1,n2){
    return n1+n2;
}

console.log(`sum(11,2) : ${sum(11, 2)}`);

console.log(`tomorrow : ${dayjs().add(1,'d')}`);
