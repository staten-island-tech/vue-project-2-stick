<Suspense>
      <template #default>
        <article-info/>
      </template>
      <template #fallback>
        <div>Loading Profile...</div>
      </template>
</Suspense>