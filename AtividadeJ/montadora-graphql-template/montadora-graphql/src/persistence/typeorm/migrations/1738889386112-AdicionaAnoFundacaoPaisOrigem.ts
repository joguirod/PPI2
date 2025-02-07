import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaAnoFundacaoPaisOrigem1738889386112 implements MigrationInterface {
    name = 'AdicionaAnoFundacaoPaisOrigem1738889386112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "montadora" ADD "anoFundacao" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "montadora" ADD "paisOrigem" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "montadora" DROP COLUMN "paisOrigem"`);
        await queryRunner.query(`ALTER TABLE "montadora" DROP COLUMN "anoFundacao"`);
    }

}
