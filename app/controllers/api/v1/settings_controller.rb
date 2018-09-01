module Api::V1

class SettingsController < ApplicationController

  def index
    @settings = Setting.all
    render json: @settings
  end

  def update
    @setting = Setting.find(params[:id])
    
    if @setting.update(setting_params)
      render json: @setting
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  private

  def setting_params
    params.require(:setting).permit(:name, :value)
  end

end

end
