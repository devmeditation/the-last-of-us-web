export const SERIES_CAST = [
  {
    id:         '1',
    actor :     'Pedro Pascal', 
    character:  'Joey Miller', 
    imageURL:      '/series-cast/pedroPascal.jpg'
  },
  {
    id:         '2',
    actor :     'Bella Ramsey', 
    character:  'Ellie', 
    imageURL:      '/series-cast/bellaRamsey.jpg'
  },
  {
    id:         '3',
    actor :     'Anna Torv', 
    character:  'Tess', 
    imageURL:      '/series-cast/annaTorv.jpg'
  },
  {
    id:         '4',
    actor :     'Merle Dandridge', 
    character:  'Marlene', 
    imageURL:      '/series-cast/merleDandridge.jpg'
  },
]



interface SeriesStatus {
  tile: string
  percent: string
}

export interface SeriesStatusPublicProps {
  id: string
  imageURL: string
  imageDescription: string
  status: SeriesStatus[]
}

export const SERIES_STATUS_PUBLIC = {
    id: '1',
    imageURL: '/side_the-last-of-us.jpg',
    imageDescription: 'Banner da serie mosta Joey e Ellie em uma rua com muitos carros abandonados...',
    statusSerie: [
      {
        title: 'Aprovação',
        percent: '97',
      },
      {
        title: 'Crítica',
        percent: '95',
      },
      {
        title: 'Audiência',
        percent: '96',
      },
    ]
}
