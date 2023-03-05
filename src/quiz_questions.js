const Questions=[
    {
        id:'1',
        cat:'Physics',
        question:'What is the source of gravity?',
        answers:[
            'Elementary virtual particles',
            'Curvature of space time',
            'It is magic',
            'None of the above'
        ],
        correct:[1]
    },
    {
        id:'2',
        cat:'Maths',
        question:"Which of the following are one of the Euclid's axioms of Geometry?",
        answers:[
            "A straight line may be drawn between any two points.",
            "Any terminated straight line may be extended indefinitely",
            "A circle may be drawn with any given point as center and any given radius.",
            "All right angles are equal."
        ],
        correct:[0,1,2,3]
    },
    {
        id:'3',
        cat:'Physics',
        question:'Two parallel wires carrying currents in opposite directions will:' ,
        answers:['attract each other',  'repel each other',  'cause an electric arc to form' ,  'not affect each other'],
        correct:[1]
    },
    {
        id:'4',
        cat:'Physics',
        question:'Assuming all other parameters remain constant, what happens to the pressure of a gas when the volume of the gas is increased?',
        answers:[ 'increases', 'decreases', 'fluctuates sinusoidally', 'remains the same'],
        correct:[1]
    }
]

export {Questions}