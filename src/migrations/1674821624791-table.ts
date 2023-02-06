import { MigrationInterface, QueryRunner } from "typeorm";

export class table1674821624791 implements MigrationInterface {
    name = 'table1674821624791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jobs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(63) NOT NULL, "salary" character varying(63) NOT NULL, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employess" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(63) NOT NULL, CONSTRAINT "PK_bbbafcca1d5c9c441d52b96869c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs_employess_employess" ("jobsId" uuid NOT NULL, "employessId" uuid NOT NULL, CONSTRAINT "PK_f61498e9cdfaf3e50fea10f6bf9" PRIMARY KEY ("jobsId", "employessId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_58e448c4193a3457e8a19b959d" ON "jobs_employess_employess" ("jobsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2c3dde16777c8e7fe3f2318717" ON "jobs_employess_employess" ("employessId") `);
        await queryRunner.query(`CREATE TABLE "employess_jobs_jobs" ("employessId" uuid NOT NULL, "jobsId" uuid NOT NULL, CONSTRAINT "PK_312fe009e4ec503f90804ccf771" PRIMARY KEY ("employessId", "jobsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bba279676f2b41de0cb36279eb" ON "employess_jobs_jobs" ("employessId") `);
        await queryRunner.query(`CREATE INDEX "IDX_37d76e110556d3a02bc52d1138" ON "employess_jobs_jobs" ("jobsId") `);
        await queryRunner.query(`ALTER TABLE "jobs_employess_employess" ADD CONSTRAINT "FK_58e448c4193a3457e8a19b959d3" FOREIGN KEY ("jobsId") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "jobs_employess_employess" ADD CONSTRAINT "FK_2c3dde16777c8e7fe3f23187174" FOREIGN KEY ("employessId") REFERENCES "employess"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "employess_jobs_jobs" ADD CONSTRAINT "FK_bba279676f2b41de0cb36279ebe" FOREIGN KEY ("employessId") REFERENCES "employess"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "employess_jobs_jobs" ADD CONSTRAINT "FK_37d76e110556d3a02bc52d1138c" FOREIGN KEY ("jobsId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employess_jobs_jobs" DROP CONSTRAINT "FK_37d76e110556d3a02bc52d1138c"`);
        await queryRunner.query(`ALTER TABLE "employess_jobs_jobs" DROP CONSTRAINT "FK_bba279676f2b41de0cb36279ebe"`);
        await queryRunner.query(`ALTER TABLE "jobs_employess_employess" DROP CONSTRAINT "FK_2c3dde16777c8e7fe3f23187174"`);
        await queryRunner.query(`ALTER TABLE "jobs_employess_employess" DROP CONSTRAINT "FK_58e448c4193a3457e8a19b959d3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_37d76e110556d3a02bc52d1138"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bba279676f2b41de0cb36279eb"`);
        await queryRunner.query(`DROP TABLE "employess_jobs_jobs"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c3dde16777c8e7fe3f2318717"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58e448c4193a3457e8a19b959d"`);
        await queryRunner.query(`DROP TABLE "jobs_employess_employess"`);
        await queryRunner.query(`DROP TABLE "employess"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
    }

}
