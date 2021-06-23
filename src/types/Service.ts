export interface Service<T, CreateDTO> {
  getAll(): Promise<T[]>;

  getOne(id: string): Promise<T>;

  createOne(dto: CreateDTO): Promise<T>;

  // Si defino en UpdateDTO, entonces el parametro DTO debe ser de tipo UpdateDTO
  // si no está definido, entonces el parametro es de tipo CreateDTO
  updateOne<UpdateDTO = CreateDTO>(id: string, dto: UpdateDTO): Promise<T>;

  deleteOne(id: string): Promise<T>;
}
