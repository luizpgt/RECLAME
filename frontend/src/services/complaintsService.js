export async function getComplaints() {
  return Promise.resolve([
    {
      id: '1',
      title: 'Lixo acumulado na praça',
      description: 'Acúmulo de resíduos em área pública, causando mau cheiro e proliferação de insetos.',
      location: 'Praça Central',
      date: '2026-05-01',
    },
    {
      id: '2',
      title: 'Iluminação pública defeituosa',
      description: 'Várias lâmpadas estão apagadas na rua principal durante a noite.',
      location: 'Rua das Flores',
      date: '2026-05-03',
    },
  ]);
}
