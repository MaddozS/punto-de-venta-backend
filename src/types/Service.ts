export interface Service<T, DTO> {
  getAll(): Promise<T[]>;

  getOne(id: string): Promise<T>;

  createOne(dto: DTO): Promise<T>;

  updateOne(id: string, dto: DTO): Promise<T>;

  deleteOne(id: string): Promise<T>;
}
