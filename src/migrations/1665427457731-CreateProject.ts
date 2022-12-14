import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateProject1665427457731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "project",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "name",
            type: "varchar(100)"
          },
          {
            name: "description",
            type: "longblob"
          },
          {
            name: "idClient",
            type: "int"
          },
          {
            name: "idPlataform",
            type: "int"
          },
          {
            name: "idType",
            type: "int"
          },
          {
            name: "idUser",
            type: "int"
          },
          {
            name: "idStatus",
            type: "int"
          },
          {
            name: "creationDate",
            type: "timestamp"
          },
          {
            name: "expectedStartDate",
            type: "date"
          },
          {
            name: "startDate",
            type: "date"
          },
          {
            name: "expectedEndDate",
            type: "date"
          },
          {
            name: "endDate",
            type: "date"
          },
          {
            name: "estimateTime",
            type: "double"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("project");
  }
}