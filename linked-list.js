import Node from './node.js'

export default class LinkedList {
  constructor () {
    this.head = null
  }

  toString () {
    if (this.head !== null) {
      let tmp = this.head
      let list = ''
      while (tmp !== null) {
        list += `${tmp.value} -> `
        tmp = tmp.next
      }
      list += tmp
      return list
    }
    return null
  }

  find (value) {
    if (this.head !== null) {
      let i = 0
      let tmp = this.head
      while (tmp.value !== value && tmp !== null) {
        tmp = tmp.next
        i++
      }
      if (tmp === null) return false
      return i
    }
    return false
  }

  contains (value) {
    if (this.head !== null) {
      let tmp = this.head
      while (tmp.next !== null) {
        if (tmp.value === value) return true
        tmp = tmp.next
      }
    }
    return false
  }

  pop () {
    if (this.head.next === null) this.head = null
    else {
      let cur = this.head
      let prev
      while (cur.next !== null) {
        prev = cur
        cur = cur.next
      }
      prev.next = null
    }
  }

  at (index) {
    if (this.head === null) return false
    else {
      let i = 0
      let tmp = this.head
      while (i < index && tmp !== null) {
        tmp = tmp.next
        i++
      }
      if (tmp === null) return false
      return index + '-' + tmp.value
    }
  }

  append (value) {
    if (this.head === null) this.head = new Node(value)
    else {
      let tmp = this.head
      while (tmp.next !== null) tmp = tmp.next
      tmp.next = new Node(value)
    }
  }

  prepend (value) {
    let tmp
    if (this.head !== null) tmp = this.head
    this.head = new Node(value)
    this.head.next = tmp
  }

  headE () {
    return this.head.value
  }

  size () {
    let i = 1
    let tmp
    if (this.head.next !== null) {
      tmp = this.head.next
      while (tmp.next !== null) {
        tmp = tmp.next
        i += 1
      }
    } else {
      return i
    }
    if (this.head !== null) {
      return i + 1
    } else {
      return 0
    }
  }

  tail () {
    let tmp
    if (this.head.next !== null) {
      tmp = this.head.next
      while (tmp.next !== null) {
        tmp = tmp.next
      }
      return tmp.value
    } else {
      return this.head.value
    }
  }
}
