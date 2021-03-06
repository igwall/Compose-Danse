import React from 'react'
import Recipe from '../components/Recipe/Recipe'
import PageLayout from '../layouts/page'

export default (props) => (
  <PageLayout>
    <Recipe
      recipeId={props.match.params.recipeId}
    />
  </PageLayout>
)
