interface Storage {
  getItem(key: string): any;
  setItem(key: string, value: any);
  remove(key: string): void;
  clear(key?: string): void;
}
function typeOf (obj: any) {
  const toString = Object.prototype.toString
  const map  = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}
class MainImplements {
  protected storage = window.localStorage;
}

class Local extends MainImplements implements Storage{
  constructor () {
    super()
  }

  clear(key?: string): any {
    return this.storage.clear()
  }

  getItem(key: string): any {
    // @ts-ignore
    if (!Object.is(typeOf(key), 'string')) {
      throw Error('key must be a string');
      return false;
    }
    try {
      return JSON.parse(this.storage.getItem(key))
    } catch (error) {
      if (error) {
        return this.storage.getItem(key)
      }
    }
  }

  remove(key: string): any {
    return this.storage.removeItem(key)
  }

  setItem(key: string, value: any): any {
    // @ts-ignore
    Object.is(typeOf(value), 'object') || Object.is(typeOf(value), 'array') ? this.storage.setItem(key, JSON.stringify(value)) : this.storage.setItem(key, value)
    return this
  }
}

class Session extends Local {
  constructor () {
    super()
    this.storage = window.sessionStorage
  }
}
let session = new Session()
let local = new Local()
export {
  session,
  local
}
export default new Local()
