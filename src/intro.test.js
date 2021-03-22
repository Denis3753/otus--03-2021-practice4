const { test, expect, it } = require("@jest/globals");
const { kolobok } = require("./homework4");
const {newYear} = require("./homework4");


describe('Function kolobok should return values', () =>{
    it('is function', () => {
        expect(typeof kolobok).toBe('function');
      });
      it('throws error when kolobok() is empty', function() {
        expect(() => kolobok()).toThrow();
      });
    it('Function kolobok("дедушка") should return  valid values',() =>{
        expect(kolobok('дедушка')).toEqual('Я от дедушки ушел');
    });
    it('Function kolobok("дедушка") should return not valid values',() =>{
        expect(kolobok('Дедуля')).not.toEqual('Я от дедушки ушел');
    });
    it('function should return length == 17',() =>{
        expect(kolobok('дедушка')).toHaveLength(17);
    });
    it('Function kolobok("бабушка") should return  valid values',() =>{
        expect(kolobok('бабушка')).toEqual('Я от бабушки ушел');
    });
    it('Function kolobok("бабушка") should return not valid values',() =>{
        expect(kolobok('бабуля')).not.toBe('Я от бабушки ушел');
    });
    it('Function kolobok("заяц") should return  valid values',() =>{
        expect(kolobok('ЗАЯЦ')).toEqual('Я от зайца ушел');
    });
    it('Function kolobok("заяц") should return not valid values',() =>{
        expect(kolobok('Зайка')).not.toEqual('Я от зайца ушел');
    });
    it('Function kolobok("волк") should return valid values',() =>{
        expect(kolobok('ВОЛК')).toEqual('Я от волка ушёл');
    });
    it('Function kolobok("волк") should return not valid values',() =>{
        expect(kolobok('Волчок')).not.toEqual('Я от волка ушёл');
    });
    it('Function kolobok("лиса") should return valid values',() =>{
        expect(kolobok('лиса')).toEqual('Лиса его — гам! — и съела');
    });
    it('Function kolobok("лиса") should return not valid values',() =>{
        expect(kolobok('лисица')).not.toBe('Лиса его — гам! — и съела');
    });
    it('function should return length == 25',() =>{
        expect(kolobok('лиса')).toHaveLength(25);
    });
});


describe('Checking function newYear', ()=>{
    it('is function', () => {
        expect(typeof newYear).toBe('function');
      });
      it('function return "undefined" ', () => {
        expect(newYear()).toBe(undefined);
      });
      it('function return  value "Дед Мороз!Дед Мороз!Дед Мороз!" ', () => {
        expect(newYear('Дед Мороз')).toEqual('Дед Мороз!Дед Мороз!Дед Мороз!');
      });
      it('function newYear("Дед Мороз") should return length == 30',() =>{
        expect(newYear('Дед Мороз')).toHaveLength(30);
    });
    it('function return  value "Снегурочка!Снегурочка!Снегурочка!" ', () => {
        expect(newYear('Снегурочка')).toEqual('Снегурочка!Снегурочка!Снегурочка!');
      });
      it('function return not valid value "Снегурочка!Снегурочка!Снегурочка!" ', () => {
        expect(newYear('Снегурка')).not.toBe('Снегурочка!Снегурочка!Снегурочка!');
      });
      it('function newYear("Снегурочка") should return length == 33',() =>{
        expect(newYear('Снегурочка')).toHaveLength(33);
    });

});