"use client"
// ** MUI Imports
import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
// ** Icons Imports
import { BiBriefcase, BiPoll } from 'react-icons/bi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoHelpCircleOutline } from 'react-icons/io5'

// ** Custom Components Imports
import CardStatsVertical from '@/@core/toolkit/CardStatsVertical'

// ** Styled Component Import
import ApexChartWrapper from './style'

// ** Demo Components Imports
import DepositWithdraw from '@/@core/views/dashboard/DepositWithdraw'
import SalesByCountries from '@/@core/views/dashboard/SalesByCountries'
import StatisticsCard from '@/@core/views/dashboard/StatisticsCard'
import DashboardTable from '@/@core/views/dashboard/Table'
import TotalEarning from '@/@core/views/dashboard/TotalEarning'
import Trophy from '@/@core/views/dashboard/Trophy'
import WeeklyOverview from '@/@core/views/dashboard/WeeklyOverview'
import UserTable from '@/@core/views/dashboard/UserTable'



const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
         <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
      <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatsVertical
                stats='$25.6k'
                icon={<BiPoll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<BsCurrencyDollar />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BiBriefcase />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<IoHelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
      <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12} md={12} lg={10} xl={12}>
          {/* <DashboardTable /> */}
          {/* <UserTable/> */}
        </Grid> 
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
