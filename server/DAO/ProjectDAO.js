class ProjectDAO{
    constructor(pool){
        this.pool =pool;
    }
    async getAll(){
        const res = this.pool.query("select * from projects;");
        return res;
    }
}
module.exports = (pool) => new ProjectDAO(pool);