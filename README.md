Hola, this is my refresher of eloquent JS. I've been writing php at work, but don't want to forget my roots


some sudo code: take an object list in the form of
list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null;
        }
    }
}

we have a object factory function that creates objects in this style from an array of numbers, how the fuck do we do what should be a simpler task and create an array out of the listed object
