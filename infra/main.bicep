@description('Name of the resource group')
param resourceGroupName string = 'rg-bicep-tutorial'
@description('Location for all resources')
param location string = resourceGroup().location
@description('Name of the storage account')
param storageAccountName string = 'mystorageaccount${uniqueString(resourceGroup().id)}'
@description('Name of the App Service plan')
param appServicePlanName string = 'myAppServicePlan'
@description('Name of the Web App')
param webAppName string = 'myWebApp${uniqueString(resourceGroup().id)}'
@description('SKU for the App Service plan')
param appServicePlanSku string = 'F1'
@description('Tier of the App Service plan')
param appServicePlanTier string = 'Basic'
@description('Runtime stack for the Web App')
param webAppRuntimeStack string = 'NODE:20-lts'


resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}
resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: appServicePlanSku
    tier: appServicePlanTier
  }
  properties: {
    reserved: true
  }
}
resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: webAppRuntimeStack
      appSettings: [
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
      ]
    }
  }
  kind: 'app,linux'
}
