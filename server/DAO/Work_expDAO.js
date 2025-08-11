class Work_expDAO{
    constructor(pool){
        this.pool=pool;
    }
    async getAll(){
        const res = this.pool.query("select * from workExp;");
        return res;
    }
}
module.exports = (pool) => new Work_expDAO(pool);