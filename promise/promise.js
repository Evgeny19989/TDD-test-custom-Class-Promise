class EvgenyPromise {
    constructor(executor) {
        this.queue = []
        executor()
    }

    onResolve(){}

    onReject(){}

    then(fn) {
        this.queue.push(fn)
        return this
    }

    catch(fn) {
    }

    finally(fn) {
    }
}

module.exports = EvgenyPromise