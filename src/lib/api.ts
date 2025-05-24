const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export type Gasto = {
  idgasto?: number;
  categoria: string;
  monto: number;
  fecha: string;
};

export async function obtenerGastos(): Promise<Gasto[]> {
  try {
    const response = await fetch(`${API_URL}/gasto`);
    if (!response.ok) throw new Error('Error al obtener gastos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function agregarGasto(gasto: Gasto): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/gasto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gasto),
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
}
