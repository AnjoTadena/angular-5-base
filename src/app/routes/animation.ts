import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('*  => home', [
    query(':enter', 
        style({  opacity : '0' })),
        group([
            query(':enter', [
                style({ opacity: '1' }),
            ]),
            query('.home', [
                style({opacity : '0'}),
                animate('1s ease-in', keyframes([
                    style({opacity: 1}),
                ]))
            ]),
            query('.reserve-form', [
                style({opacity: 0, width : '2px', height: '2px'})
            ]),
            query('.form--header', [
                style({background: 'white'})
            ]),
        ]),
        query('.reserve-form', [
            style({opacity: 0}),
            animate('1.5s ease', keyframes([
                style({
                    opacity: 1,
                    width:'400px',
                    height: '2px',
                    offset: 0.7
                }),
                style({
                    height: '500px',
                    width:'400px',
                    background: 'white',
                    opacity: '1',
                    offset: 1
                }),
            ]))
        ]),
        
  ]),
  transition('detail => *', [
    query(':leave', 
        style({  opacity : '1' })),
        group([
            query('.map', [
                style({opacity : '0', position: 'absolute', transform: 'scale(1.2)'}),
                animate('0.5s ease-in', keyframes([
                    style({opacity: 0, offset: 0}),
                    style({opacity: '1', transform: 'scale(1)', offset: 1.0})
                ]))
            ]),
            query('.block1', stagger('1ms', [
                animate('.35s ease-out', keyframes([
                style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: 0, transform: 'translateX(-75px)',     offset: 1.0}),
                ]))
            ])),
            query('.right', stagger('1ms', [
                animate('.35s ease-out', keyframes([
                style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: 0, transform: 'translateX(75px)',     offset: 1.0}),
                ]))
            ])),
            query('.main', stagger('100ms', [
                animate('1s ease', keyframes([
                style({opacity: 1, transform: 'scale(1)', offset: 0}),
                style({opacity: 0, transform: 'scale(0.8)',     offset: 1.0}),
                ]))
            ])),
            query('.cars', [
                style({opacity : '0', position: 'absolute', transform: 'scale(1.1)'}),
                animate('0.5s', keyframes([
                    style({opacity: '1', transform: 'scale(1)'})
                ]))
            ]),
            query('.footer-nav', [
                style({opacity : '1', transform: 'translateY(0)'}),
                animate('0.5s', keyframes([
                    style({opacity: '0', transform: 'translateY(60px)'})
                ]))
            ]),
            
        ]),
    ]),  
  ])