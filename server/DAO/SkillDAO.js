class SkillDAO{
    constructor(pool){
        this.pool =pool;
    }
    async getAll(){
        const res = this.pool.query("select * from skills;");
        return res;
    }
}
module.exports = (pool) => new SkillDAO(pool);