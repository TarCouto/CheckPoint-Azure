exports.seed = async function (knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      name: 'Supino inclinado com barra',
      series: 4,
      repetitions: 12,
      group: 'Massa',
      demo: 'supino_inclinado_com_barra.gif',
      thumb: 'supino_inclinado_com_barra.png',
    },
    {
      name: 'Crucifixo reto',
      series: 3,
      repetitions: 12,
      group: 'Comida Brasileira',
      demo: 'crucifixo_reto.gif',
      thumb: 'crucifixo_reto.png'
    },
    {
      name: 'Supino reto com barra',
      series: 3,
      repetitions: 12,
      group: 'Esfirra',
      demo: 'supino_reto_com_barra.gif',
      thumb: 'supino_reto_com_barra.png'
    },
    {
      name: 'Francês deitado com halteres',
      series: 3,
      repetitions: 12,
      group: 'Padaria',
      demo: '',
      thumb: ''
    },
    {
      name: 'Francês deitado com halteres',
      series: 3,
      repetitions: 12,
      group: 'Padaria',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    },
    {
      name: 'Francês deitado com halteres',
      series: 3,
      repetitions: 12,
      group: 'Padaria',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    },
  ]);
};