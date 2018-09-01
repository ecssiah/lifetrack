module Api::V1

class SettingsController < ApplicationController

  def index
    @settings = Setting.all
    render json: @settings
  end

  def show
    @setting = Setting.find(params[:id])
    render json: @setting
  end

  def create
    @setting = Setting.new(setting_params)

    if @setting.save
      render json: @setting, status: :created
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  def update
    @setting = Setting.find(params[:id])
    
    if @setting.update(setting_params)
      render json: @setting
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @setting = Setting.find(params[:id])
    @setting.destroy

    if @setting.destroy
      head :no_content, status: :ok
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
