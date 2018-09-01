module Api::V1

class FocusesController < ApplicationController

  def index
    @focuses = Focus.all
    render json: @focuses
  end

  def show
    @focus = Focus.find(params[:id])
    render json: @focus
  end

  def create
    @focus = Focus.new(focus_params)

    if @focus.save
      render json: @focus, status: :created
    else
      render json: @focus.errors, status: :unprocessable_entity
    end
  end

  def update
    @focus = Focus.find(params[:id])
    
    if @focus.update(focus_params)
      render json: @focus
    else
      render json: @focus.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @focus = Focus.find(params[:id])
    @focus.destroy

    if @focus.destroy
      head :no_content, status: :ok
    else
      render json: @focus.errors, status: :unprocessable_entity
    end
  end


  private

  def focus_params
    params.require(:focus).permit(
      :name, :level, :experience, :iterations, :goal
    )
  end

end

end

