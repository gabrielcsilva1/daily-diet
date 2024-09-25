import {
  CardsContainer,
  Container,
  GeneralStatsContainer,
  Subtitle,
} from './style'

import { Card } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/ui/Highlight'
import { useEffect, useState } from 'react'
import { StatisticsDTO } from '@/dtos/statistics-DTO'
import { Loading } from '@/components/ui/Loading'
import { getStatistics } from '@/storage/meal/get-statistics'
import { useTheme } from 'styled-components/native'

export function DietStats() {
  const [statistics, setStatistics] = useState<StatisticsDTO | null>(null)
  const { COLORS } = useTheme()

  async function fetchStatistics() {
    try {
      const response = await getStatistics()
      setStatistics(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  if (!statistics) {
    return <Loading/>
  }

  return (
    <Container style={{backgroundColor: statistics.percentage >= 50 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}}>
      <Header $variant={statistics.percentage >= 50 ? 'SUCCESS' : 'DANGER'} />
      <Highlight title={`${statistics.percentage.toFixed(2)}%`} label="das refeições dentro da dieta" />

      <GeneralStatsContainer>
        <Subtitle>Estatísticas gerais</Subtitle>

        <CardsContainer>
          <Card value={statistics.bestSequence} description="melhor sequência de pratos" />
          <Card value={statistics.totalAmount} description="refeições registradas" />
          <CardsContainer isHorizontal>
            <Card
              value={statistics.inDietAmount}
              description="Refeições dentro da dieta"
              $variant="SUCCESS"
            />
            <Card
              value={statistics.outDietAmount}
              description="Refeições fora da dieta"
              $variant="DANGER"
            />
          </CardsContainer>
        </CardsContainer>
      </GeneralStatsContainer>
    </Container>
  )
}
